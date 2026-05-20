import { MeiliSearch } from 'meilisearch'
import Config from 'react-native-config'

const MEILISEARCH_HOST = Config.MEILISEARCH_HOST
const MEILISEARCH_API_KEY = Config.MEILISEARCH_API_KEY

const INDEXES = {
    DISTRIBUTOR: 'idx_distributor',
    PRODUCT: 'idx_product',
    PHARMACY: 'idx_pharmacy',
}

const client = new MeiliSearch({
    host: MEILISEARCH_HOST,
    apiKey: MEILISEARCH_API_KEY,
})

export const searchProducts = async (query, options = {}) => {
    try {
        const index = client.index(INDEXES.PRODUCT)
        const results = await index.search(query, {
            limit: options.limit || 20,
            offset: options.offset || 0,
            ...options,
        })
        return results
    } catch (error) {
        console.error('Meilisearch Product Search Error:', error)
        throw error
    }
}

export const searchDistributors = async (query, options = {}) => {
    try {
        const index = client.index(INDEXES.DISTRIBUTOR)
        const results = await index.search(query, {
            limit: options.limit || 20,
            offset: options.offset || 0,
            ...options,
        })
        return results
    } catch (error) {
        console.error('Meilisearch Distributor Search Error:', error)
        throw error
    }
}

export const searchPharmacies = async (query, options = {}) => {
    try {
        const index = client.index(INDEXES.PHARMACY)
        const results = await index.search(query, {
            limit: options.limit || 20,
            offset: options.offset || 0,
            ...options,
        })
        return results
    } catch (error) {
        console.error('Meilisearch Pharmacy Search Error:', error)
        throw error
    }
}

export const searchAll = async (query, options = {}) => {
    try {
        const [products, distributors, pharmacies] = await Promise.all([
            searchProducts(query, options),
            searchDistributors(query, options),
            searchPharmacies(query, options),
        ])
        return {
            products,
            distributors,
            pharmacies,
        }
    } catch (error) {
        console.error('Meilisearch Search All Error:', error)
        throw error
    }
}

export { client, INDEXES, MEILISEARCH_HOST }
