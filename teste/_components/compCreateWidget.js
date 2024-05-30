
import { widgetContainer } from "./compWidgetContainer.js";
import { formComponents } from "./compformComponents.js";


function createWidget() {
    return (`
        <header>
            Novo Widget +
        </header>
        
        ${widgetContainer( "Novo component", formComponents() )}
 
    `)
}


function addComponent(el){
    
}


export { createWidget, addComponent }

