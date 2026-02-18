import { GoogleGenerativeAI } from "@google/generative-ai";


const API_KEY = ''; // Ersätt med din API-nyckel


const genAi = new GoogleGenerativeAI(API_KEY);
const model = genAi.getGenerativeModel({ model: "gemini-2.5-flash" });


async function getGeminiAnswer(prompt:string){
    try {
        console.log(prompt)
        const result = await model.generateContent(prompt);
        const answer = result.response.text();  
        return answer;
    } catch (error) {
        console.error('Fel:', error);
    }
}

type ConvoInput = { [key: string]:string};
const conversation: ConvoInput[] = [];

const renderConversation = (conversation:ConvoInput[])=>{

    const conversationDiv = document.querySelector('#conversation') as HTMLDivElement;
    conversationDiv.innerHTML = '';

    console.log('start of for of loop')

    for(const input of [...conversation].reverse()){
        console.log(input);
        const [key] = Object.keys(input);

        const pEl = document.createElement('p');
        pEl.innerText = input[key];
        pEl.classList.add(key);

        conversationDiv.append(pEl);
    }

}

const getPrompt = (conversation:ConvoInput[]) => {

    const prompt = `Anta rollen som en psykoterapeut som baserar din terapi på nya forskningsrön. Du bemöter dina patienter på ett rakt men samtidigt empatiskt sätt. Du vill att de ska möta sina jobbiga sidor.
    
    Utgå ifrån följande konversation i json-format mellan ''' och '''. 
    ''' ${JSON.stringify(conversation)}'''

    Ge ditt svar i följande format: vanlig text, max fyra meningar, en mening ska alltid vara en uppmaning, en mening ska vara en fråga som tar oss vidare i konversationen. Svaren ska alltid grunda sig i evidensbaserad kunskap.
    
    Om konversationen är tom, börja istället med att ställa frågor som inledning i ett första terapisamtal. Målet är att förstå vem du pratar med, vad personen vill ha hjälp med och vad personen har för styrkor.`;

    return prompt;
}

// Låt gemini starta konversationen med användaren
const startConvo = async ()=>{
    const prompt = getPrompt(conversation)
    const reply = await getGeminiAnswer( prompt )

    if(reply) conversation.push({gemini: reply});
    renderConversation(conversation);
}
startConvo();

const form = document.querySelector('form') as HTMLFormElement;
form.addEventListener('submit', async (event)=>{
    event.preventDefault();

    // Hämta användarens text och lägg in i konversationen
    const inputText = form.querySelector('input')?.value;
    
    if(inputText){
        conversation.push({user: inputText});

        // Skapa prompt-texten som använder hela konversationen
        const prompt = getPrompt(conversation)

        // Hämta geminis svar och lägg in i konversationen
        const reply = await getGeminiAnswer(prompt);
        if(reply) conversation.push({gemini: reply});

        renderConversation(conversation);
    }
   
})

