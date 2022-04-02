import * as dashboardService from '../services/dashboardService.js';
import {html} from '../../node_modules/lit-html/lit-html.js';

export const deleteView = async (ctx) =>{
    try{
        const postcard = await dashboardService.getOne(ctx.params.postcardId);
        let confirmed = confirm(`Do you want to delete the album: ${postcard.name}`);
        if(confirmed){
            await dashboardService.del(ctx.params.postcardId);
            ctx.page.redirect('/');
        }
    } catch(err){
        window.alert(err);
    }
}