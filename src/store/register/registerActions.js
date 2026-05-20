import { NEOMED } from '../actionsTypes'

export const signUp = (phone) => {
    return {
        type: NEOMED.SIGNUP_REQUEST,
        payload: {
            phone
        }
    }
}

export const confirmSignUp = (requestId, otp) => {
    return {
        type: NEOMED.CONFIRM_SIGNUP_REQUEST,
        payload: {
            requestId,
            otp
        }
    }
}

export const updateProfile = (email) => {
    return {
        type: NEOMED.UPDATE_PROFILE_REQUEST,
        payload: {
            email
        }
    }
}

export const updateIdentity = (dob, dateIssue, fullName, nationalId, placeIssue, residenceAddress) => {
    return {
        type: NEOMED.UPDATE_IDENTITY_REQUEST,
        payload: {
            dob,
            dateIssue,
            fullName,
            nationalId,
            placeIssue,
            residenceAddress
        }
    }
}

export const resetUpdateProfile = () => {
    return {
        type: 'RESET_UPDATE_PROFILE'
    }
}

export const resetUpdateIdentity = () => {
    return {
        type: 'RESET_UPDATE_IDENTITY'
    }
}

export const resetSignUp = () => {
    return {
        type: 'RESET_SIGNUP'
    }
}

export const resetConfirmSignUp = () => {
    return {
        type: 'RESET_CONFIRM_SIGNUP'
    }
}