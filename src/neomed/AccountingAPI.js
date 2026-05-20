import accountingClient, { setToken } from './api/accountingClient'

class AccountingAPI {
    updateToken(accessToken) {
        setToken(accessToken)
    }

    getBalance = async (id) => {
        const response = await accountingClient.post(`/balance`, { id })
        console.log('API called successfully. Returned data:', response)
        return response
    }
}

export const Accounting = new AccountingAPI()
