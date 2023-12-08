import { HttpCode, HttpException, HttpStatus, Injectable, Res } from '@nestjs/common';
import { error } from 'console';
import Moralis from 'moralis';
import { throwError } from 'rxjs';
const {EvmChain} = require('@moralisweb3/common-evm-utils')
const contact = require('./contactModel')
const Redis = require('redis')
const redisClient = Redis.createClient();
 redisClient.connect();


interface URI{
  name: string;
  phoneNo: Number;
}

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  
  async Listen(body:any): Promise<{data:string }> {

  
// console.log(body)
   try {



    // const decode = Moralis.Streams.parsedLogs<URI>(body);

    // console.log(decode[0].name.toString());
    // console.log(decode[0].phoneNo.toString());
    // let name  = decode[0].name.toString()
    // let phoneNo = decode[0].phoneNo.toString()

  //   const newContact = new contact({
  //     name, phoneNo
  // })

  // await newContact.save()
    

   } catch (error) {
    console.log(error)
    throw new HttpException('Forbidden', 400);
   }

    
   console.log('done')
    return {data:body}
  }


  async getAllContact(): Promise<{data:string}>{

    redisClient.on('error', err => console.log('Redis Client Error', err));

  try {

  let contacts = await redisClient.get('contact')
  console.log(contacts)

  if(contacts!=null){
    console.log('cache hit')
      return (contacts);
  }
  else{
      console.log('cache miss');
      var {data} =  await contact.find({});
      await redisClient.set(
        "contact",
     '',
        JSON.stringify(data)
      )
        return data;
    }



  } catch (error) {
    console.log(error);
      throw new HttpException('redis Error', 500)
  }

  //  return await contact.find({});
  }

}
