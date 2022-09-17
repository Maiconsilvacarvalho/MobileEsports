import express  from 'express';
import {PrismaClient} from '@prisma/client'
import { convertHoursStringToMinutes } from './utils/convert-hour-string-to-minutes';
import { convertHoursMinutesToHoursString } from './utils/convert-minutes-string-to-hours';
import  cors  from "cors"; // instalar : npm i @types/cors -D
const app = express()

app.use(express.json())

app.use(cors()) // premite todos acessarem nossas rotas em produção da API

/* app.use(cors({
    origin:'http://dev-maicon-carvalho.netlify.com'

    // oringin você liberar qual endereço permite fazer requisições para o back-end
})) */

const prisma = new PrismaClient({
    log: ['query']
})

app.get('/games', async(request, response) => {
    const games = await prisma.game.findMany({
        include:{ // join no relacionamento
            _count:{// conta o número de células que tem números
                select: {//permite recuperar os dados de um objeto
                    ads:true,// tornar positivo quantidade de anúncios
                }
            }
        }
    })

    return response.json(games);
})

app.post('/games/:id/ads', async (request, response) => {
    const gameId = request.params.id;    
    const body: any = request.body;
    
    // validações zod javascript

    const ad = await prisma.ad.create({
        data: {
            gameId,
            name: body.name,
            yearsPlaying: body.yearsPlaying,
            discord:  body.discord,
            weekDays: body.weekDays.join(','),
            hourStart: convertHoursStringToMinutes( body.hourStart),
            hourEnd: convertHoursStringToMinutes( body.hourEnd),
            useVoiceChannel: body.useVoiceChannel,

        }
    })
    return response.status(201).json(ad);

})

app.get('/games/:id/ads', async (request, response) => {
    const gameId = request.params.id
    const ads = await prisma.ad.findMany({
        select:{ // listar quais campos mostrar no json
            id:true,
            name: true,
            yearsPlaying:true,
            weekDays: true ,
            hourStart: true ,
            hourEnd: true,
            useVoiceChannel: true,
            
        },
        where:{//vários ADS
            gameId,
        },
        orderBy: {// ordenação decrescente
            createdAt: 'desc'
        }
    })
    return response.json(ads.map(ad =>{
        return{
            ...ad,
            weekDays:ad.weekDays.split(','),
            hourStart: convertHoursMinutesToHoursString(ad.hourStart),
            hourEnd: convertHoursMinutesToHoursString(ad.hourEnd)
        }
    }))
})


app.get('/ads/:id/discord', async (request, response) => {
    
    const adId = request.params.id;

    const ad = await prisma.ad.findUniqueOrThrow({
        select:{
            discord: true,
        },
        where: {
            id: adId,
        }
    })

    return response.json({
        discord:ad.discord
    })
})

app.listen(3333)