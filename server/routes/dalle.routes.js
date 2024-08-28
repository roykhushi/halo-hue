import express, { json } from 'express';
import * as dotenv from 'dotenv';
// import OpenAI from 'openai';

import { HfInference } from '@huggingface/inference'

const hf = new HfInference('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')


dotenv.config();

const router = express.Router();

// const openai = new OpenAI({
//     apiKey: process.env.OPENAI_API_KEY,
//   });

router.route('/').get((req,res) => {
    try{
    res.status(200).json({
        message: "Hello from DALL.E Routes"
    })}
    catch(e){
        res.send({message:e.message});
    }
})

//route for sending data from frontend to the backend



router.route('/').post(async(req,res)=>{
    try {
        //getting prompt from frontend
        const {prompt} = req.body;
        // //creating an img resp
        // const response = await openai.images.generate({
        //     prompt,
        //     n:1,
        //     size:'1024x1024',
        //     response_format : 'b64_json'
        // });
        const response = await hf.textToImage({
            inputs: prompt,
            model: 'nlpconnect/vit-gpt2-image-captioning',
            parameters: {
              negative_prompt: 'blurry',
            }
          })
        const image = response.data.data[0].b64_json;
        res.status(200).json({photo: image});
    } catch (error) {
        console.log(error);
        res.status(500).json({message : "Something went wrong!"})
    }
})

export default router;