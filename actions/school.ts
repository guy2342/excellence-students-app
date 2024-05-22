'use server'

import { db } from "@/lib/db"

export async function createSchoolAction(formData: FormData) {
   console.log(formData)
   const city = formData.get('city') || "";
   const street = formData.get('street') || "";
   const number = formData.get('number') || "" ;
   const name = formData.get('name') || "" ;
   const phone = formData.get('phone') || "" ;

    // Check if address already exists
    const addressExists = await db.address.findMany();

    if(addressExists) {
       await db.address.create({
         data: {
             name: name,
             phone: phone,
             address : {
              create : addressExists,
             },
         }
       }) 
    }
    // if not, create new address
    // create new school

}