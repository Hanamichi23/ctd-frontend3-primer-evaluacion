(this["webpackJsonpctd-frontend3-primer-evaluacion"]=this["webpackJsonpctd-frontend3-primer-evaluacion"]||[]).push([[0],{15:function(e,a,t){},17:function(e,a,t){"use strict";t.r(a);var o=t(1),n=t.n(o),s=t(9),i=t.n(s),r=(t(15),t(10)),c=t(3),l=t(4),u=t(2),d=t(6),p=t(5),h=t(8),b=t(0);var j=function(e){return Object(b.jsx)("div",{className:"historia",children:Object(b.jsx)("h1",{children:e.historiaActual})})},m=function(e){Object(d.a)(t,e);var a=Object(p.a)(t);function t(e){var o;return Object(c.a)(this,t),(o=a.call(this,e)).handleClick=o.handleClick.bind(Object(u.a)(o)),o}return Object(l.a)(t,[{key:"handleClick",value:function(e){this.props.onEleccion(e)}},{key:"render",value:function(){return Object(b.jsxs)("div",{className:"opcion",children:[Object(b.jsx)("button",{type:"button",className:"botones",id:this.props.id,onClick:this.handleClick,children:this.props.textoBoton}),Object(b.jsx)("h2",{children:this.props.opcionActual})]})}}]),t}(n.a.Component),v=function(e){Object(d.a)(t,e);var a=Object(p.a)(t);function t(e){var o;return Object(c.a)(this,t),(o=a.call(this,e)).handleEleccion=o.handleEleccion.bind(Object(u.a)(o)),o.getOpcionesKeys=o.getOpcionesKeys.bind(Object(u.a)(o)),o.getOpciones=o.getOpciones.bind(Object(u.a)(o)),o}return Object(l.a)(t,[{key:"handleEleccion",value:function(e){this.props.onEleccion(e)}},{key:"getOpcionesKeys",value:function(){return Object.keys(this.props.opcionesActuales)}},{key:"getOpciones",value:function(e){for(var a=[],t=0;t<Object.keys(this.props.opcionesActuales).length;t++)a.push(Object(b.jsx)(m,{textoBoton:this.getOpcionesKeys()[t].toUpperCase(),opcionActual:this.props.opcionesActuales[this.getOpcionesKeys()[t]],id:this.getOpcionesKeys()[t],onEleccion:this.handleEleccion},t));return a}},{key:"render",value:function(){return Object(b.jsx)("div",{className:"opciones",children:this.getOpciones()})}}]),t}(n.a.Component),O=function(e){Object(d.a)(t,e);var a=Object(p.a)(t);function t(e){return Object(c.a)(this,t),a.call(this,e)}return Object(l.a)(t,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"recordatorio",children:[Object(b.jsxs)("h3",{children:["Selecci\xf3n anterior: ",this.props.historialElecciones[this.props.historialElecciones.length-1]]}),Object(b.jsx)("h4",{children:"Historial de opciones elegidas:"}),Object(b.jsx)("ul",{className:"listaElecciones",children:this.props.historialElecciones.slice(0,-1).map((function(e,a){return Object(b.jsx)("li",{children:e},a)}))})]})}}]),t}(n.a.Component),y=function(e){Object(d.a)(t,e);var a=Object(p.a)(t);function t(e){var o;return Object(c.a)(this,t),(o=a.call(this,e)).state={data:null,idActual:null,eleccionesAnteriores:null},o.getMomentoActual=o.getMomentoActual.bind(Object(u.a)(o)),o.handleEleccion=o.handleEleccion.bind(Object(u.a)(o)),o}return Object(l.a)(t,[{key:"componentDidMount",value:function(){this.setState({data:h,idActual:h[0].id,eleccionesAnteriores:[]})}},{key:"handleEleccion",value:function(e){console.log(e);var a=e.target.id,t=parseInt(this.state.idActual[0])+1+this.state.idActual.slice(1,this.state.data[0].id.length)+a;!this.state.data.find((function(e){return e.id===t}))?alert("Fin."):this.setState((function(a){var o=Object(r.a)(a.eleccionesAnteriores);return o.push(e.target.textContent),{idActual:t,eleccionesAnteriores:o}}))}},{key:"getMomentoActual",value:function(){var e=this;return this.state.data.find((function(a){return a.id===e.state.idActual}))}},{key:"render",value:function(){return this.state.data?Object(b.jsxs)("div",{className:"layout",children:[Object(b.jsx)(j,{historiaActual:this.getMomentoActual().historia}),Object(b.jsx)(v,{opcionesActuales:this.getMomentoActual().opciones,onEleccion:this.handleEleccion}),Object(b.jsx)(O,{historialElecciones:this.state.eleccionesAnteriores})]}):null}}]),t}(n.a.Component);i.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(y,{})}),document.getElementById("root"))},8:function(e){e.exports=JSON.parse('[{"id":"1","historia":"Un d\xeda como cualquiera te vas a dormir, lo siguiente que sabes es que te despertas en el medio de un bosque.","opciones":{"a":"Pedir ayuda a los gritos.","b":"Mirar a mi alrededor."}},{"id":"2a","historia":"Instant\xe1neamente entras en p\xe1nico por lo bizarro de la situaci\xf3n y gritas: -Aiiudaaaa. Nadie responde. Detr\xe1s de un \xe1rbol enfrente tuyo se asoma lo que parece ser una bola de pelo de 2 metros.","opciones":{"a":"Te levant\xe1s y camin\xe1s lentamente hacia atr\xe1s.","b":"Te levant\xe1s y sal\xeds corriendo."}},{"id":"2b","historia":"Miras a tu alrededor y ves solo \xe1rboles, plantas y hongos, Detr\xe1s de un \xe1rbol enfrente tuyo se asoma lo que parece ser una bola de pelo de 2 metros.","opciones":{"a":"Te levant\xe1s y camin\xe1s lentamente hacia atr\xe1s.","b":"Te levant\xe1s y sal\xeds corriendo."}},{"id":"3a","historia":"Lento y sin sacarle la mirada de encima te vas alejando de la cosa peluda. Ves que de golpe se mueve y empieza a correr hacia vos, no distinguis que es pero salis corriendo. Escuchas de golpe un grito proveniente de la cosa peluda: -Esperaaa!!","opciones":{"a":"Le haces caso y esperas.","b":"Mira si voy a esperar, sigo corriendo."}},{"id":"3b","historia":"Al levantarte ves que se mueve y empieza a correr hacia vos, no distingu\xeds que \xe9s pero sal\xeds corriendo pensando que puede ser un oso. Escuchas de golpe un grito proveniente de la cosa peluda: -Esperaaa!!","opciones":{"a":"Le haces caso y esperas.","b":"Mira si voy a esperar, sigo corriendo."}},{"id":"4a","historia":"Paras de correr y al darte vuelta con algo de miedo ves que lo que te persegu\xeda se detiene, te quedas sin palabras al ver que es un oso gigante con la cara de una se\xf1ora muy maquillada que te dice; -Si quer\xe9s llorar, llora pero est\xe1s en un sue\xf1o mi amor.","opciones":{"a":"Me r\xedo en la cara del oso-se\xf1ora.","b":"Me pongo a bailar."}},{"id":"4b","historia":"El miedo no deja tu cuerpo y hace bien as\xed que segu\xeds corriendo, sin darte cuenta te tropezas con una piedra y quedas de cara con lo que te persegu\xeda, lo que ves es rid\xedculo, un oso gigante con la cara de una se\xf1ora muy maquillada que te dice; -Si quer\xe9s llorar, llora pero est\xe1s en un sue\xf1o mi amor.","opciones":{"a":"Me r\xedo en la cara del oso-se\xf1ora.","b":"Me pongo a bailar."}},{"id":"5a","historia":"Te empezas a reir como nunca, y de una forma bastante molesta la verdad. El oso-se\xf1ora se cansa de vos y te da una s\xf3lida bofetada en la cara con su brazo de 60kg que te tuerce el cuello y te despierta instant\xe1neamente. FIN.","opciones":{"a":"FIN.","b":"FIN."}},{"id":"5b","historia":"Por alguna raz\xf3n decid\xeds ponerte a bailar, el oso-se\xf1ora no entiende porqu\xe9, los animales del bosque no entienden porqu\xe9, yo que escribo esto no entiendo porqu\xe9, nadie entiende porqu\xe9. El oso-se\xf1ora se cansa de tu bailecito y te da una s\xf3lida bofetada en la cara con su brazo de 60kg que te tuerce el cuello y te despierta instant\xe1neamente. FIN.","opciones":{"a":"FIN","b":"FIN"}}]')}},[[17,1,2]]]);
//# sourceMappingURL=main.41823249.chunk.js.map