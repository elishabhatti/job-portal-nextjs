"use server"

export const registrationAction = async (formData:FormData) => {    
    console.log(Object.fromEntries(formData.entries()));
    
}