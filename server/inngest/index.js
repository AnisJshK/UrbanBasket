import {Inngest} from 'inngest';
import userModel from '../models/userModel.js';

export const inngest = new Inngest({id:"urbanbasket-app"});

const syncUserCreation = inngest.createFunction(
   {
    id:"sync-user-from-clerk",
    triggers:[{event:"clerk/user.created"}],
   },
   async({event})=>{
    const {id,first_name,last_name,email_addresses,image_url} = event.data;

    const userData = {
        _id:id,
        email:email_addresses[0].email_address,
        name:`${first_name} ${last_name}`.trim(),
        image:image_url
    };
    await userModel.create(userData)
   }
);

const syncUserDeletion = inngest.createFunction(
    {id:'delete-user-from-clerk',triggers:[{event:"clerk/user.deleted"}]},
    async({event})=>{
        const {id} = event.data;
        await userModel.findByIdAndDelete(id);
    },
);

const syncUserUpdation = inngest.createFunction(
    {id:"update-user-from-clerk",triggers:{event:"clerk/user.updated"}},
    async({event})=>{
        const {id,first_name,last_name,email_addresses,image_url}=event.data;
        const userData = {
            email:email_addresses[0].email_address,
            name:`${first_name} ${last_name}`.trim(),
            image:image_url,
        };
        await userModel.findByIdAndUpdate(id,userData)
    },
)

export const functions = [syncUserCreation,syncUserUpdation,syncUserDeletion];