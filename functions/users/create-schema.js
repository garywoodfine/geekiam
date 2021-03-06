#!/usr/bin/env node
/* use with `netlify dev:exec <path-to-this-file>` */
const process = require('process')
let collection = require('./collection')

const { query, Client } = require('faunadb')

const createSchema = function () {
    if (!process.env.FAUNADB_SERVER_SECRET) {
        console.log('Fauna Secret Environment variable does not exist.')
        console.log('Database cannot be created.')
    }

    console.log(`A collection with the name ${collection.name} will be created`)

    const client = new Client({
        secret: process.env.FAUNADB_SERVER_SECRET,
    })

    return client
        .query(query.CreateCollection({ name: collection.name }))
        .then(() => {
            console.log(`created ${collection.name} collection`)
            return client.query(
                query.CreateIndex({
                    name: collection.index,
                    source: query.Collection(collection.name),
                    active: true,
                })
            )
        })
        .catch((error) => {
            if (
                error.requestResult.statusCode === 400 &&
                error.message === 'instance not unique'
            ) {
                console.log(`Collection: ${collection.name} already exists`)
            }
            throw error
        })
}

createSchema()
