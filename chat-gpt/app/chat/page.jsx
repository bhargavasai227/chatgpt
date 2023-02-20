"use client"
import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Configuration, OpenAIApi } from "openai";

const fun = async (prompt) => {
    const configuration = new Configuration({
        organization: "org-Cu99h7UATb3HCdZMBOHUteUL",
        apiKey: "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",
    });
    const openai = new OpenAIApi(configuration);
    try {
        const response = await openai.createCompletion({
            model: "text-davinci-002",
            prompt: `${prompt}`,
            max_tokens: 7,
            temperature: 0,
        });
    } catch (error) {

    }


}

function page() {

    const searchParams = useSearchParams();
    const page = searchParams.get("name");
    const [pro, setPro] = useState("");
    return (
        <div className='bg-[#343541] h-screen flex flex-col text-white'>
            <div className='p-5 max-w-full'>{pro}</div>
            <div className='h-4/5 '>

            </div>
            <div className='p-5 mt-7 gap-3 flex'>
                <input placeholder='type any thing' className='w-11/12  bg-[#40414f] px-2 pt-1 h-10 text-white focus:border-0' onInput={(e) => {
                    setPro(e.target.value);
                }} ></input>
                <a className="hover:text-gray-200 hover:bg-slate-900 " onClick={() => { fun(pro) }}>send</a>
            </div>
        </div>
    )
}

export default page