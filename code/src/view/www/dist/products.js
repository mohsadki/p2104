class product{constructor(){this.actualPage=0,this.actualPage=0}getNextPage(){this.getPage(this.actualPage+1)}getPrevPage(){this.getPage(this.actualPage-1)}getPage(s){const i=this.startLoading,e=this.stopLoading,a=this.getProdHtml;s>=0&&s<3&&(this.actualPage=s,$.ajax({url:`index.php?rest=product/product/getProdPage&page=${s}`,dataType:"json",beforeSend:()=>{i()},success:s=>{$("div#prods_container").promise().done(()=>{let i="",e=0;for(;s[e];)i+=a(s[e]),e+=1;$("div#prods_container").prop("innerHTML",i)})},complete:()=>{e()},error:(s,i,e)=>{alert(`${e}\r\n${s.statusText}\r\n${s.responseText}`)}}))}getProdHtml(s){return`\n    <div class='col s6' >\n      <div id="${s.id}" class='card small'>\n        <div class="card-image">\n          <img src='src/view/www/src/images/${s.image}' />\n          <span class="card-title black-text">${s.title}</span>\n        </div>\n        <div class="card-content">\n          <p>${s.title}</p>\n        </div>\n        <div class="card-action">\n          <a name="prod_info" class="waves-effect waves-green btn-flat">More</a>\n        </div>\n      </div>\n    </div>`}showProdInfo(s){const i=$("div#prod_modal div.modal-content");i.html('\n    <div class="preloader-wrapper active">\n      <div class="spinner-layer spinner-red-only">\n        <div class="circle-clipper left">\n          <div class="circle"></div>\n        </div>\n        <div class="gap-patch">\n          <div class="circle"></div>\n          </div><div class="circle-clipper right">\n          <div class="circle"></div>\n        </div>\n      </div>\n    </div>'),window.prod_modal.open(),$.ajax({url:`index.php?rest=product/product/getProdInfo&prod_id=${s}`,dataType:"json",success:s=>{const e=`${`\n        <div class="row">\n          <div class="col s6">\n            <img class="responsive-img"  src="src/view/www/src/images/${s.image}" >\n          </div>\n        </div>`} <br> ${`\n        <div class="row">\n          <div class="col s6">\n            <div class="prod_description">${s.description}</div>\n            </div>\n        </div>`}`;i.html(e)},error:()=>{alert("something happend!")}})}startLoading(){$("div#prods_container").children().fadeOut()}stopLoading(){$("div#prods_container").children().fadeIn()}}
