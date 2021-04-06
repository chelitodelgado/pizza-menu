
const URL = 'http://127.0.0.1:5500/pizzerias.json';

fetch( URL )
.then( resp => resp.json() )
.then( data => {

    // console.log(data);
    const card = document.getElementById('card');
    const list = data; 
    
    for (let i=0; i<=list.length; i++) {
        
        card.innerHTML += `
            <div class="md:w-1/2 lg:w-1/3 py-4 px-4" >
                <div>
                    <a href="#" class="hover:bg-gray-50">
                        <div class="bg-white relative shadow p-2 rounded-lg text-gray-800 hover:shadow-lg">
                            <div class="right-0 mt-4 rounded-l-full absolute text-center font-bold text-xs text-gray-100 px-2 py-1">
                                ${list[i].categoria}
                            </div>
                            <img src="${list[i].imagen}" class="h-32 rounded-lg w-full object-cover">

                            <div class="py-2 px-2">
                                <div class=" font-bold font-title text-center">${list[i].nombre}</div>
                                <div class="text-sm font-light text-center my-2">${list[i].direccion}</div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        `;
    }   

}).catch( err => console.log(err) ); 




