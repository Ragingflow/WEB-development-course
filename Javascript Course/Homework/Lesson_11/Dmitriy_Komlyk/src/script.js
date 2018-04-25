$(document).ready(()=>{
    $("#search").submit(()=>{
        let search = $("#books").val();
        if(search === "") {
            alert("Введите название книги");
        }
        else {
            let ajaxUrl = "https://www.googleapis.com/books/v1/volumes?q=" + search;
            let $result = $('#result');
            $.getJSON(ajaxUrl ,response => {
                $result.empty();
                let responseItems = response.items;
                const convertDate=dateString=>{
                    let p = dateString.split(/\D/g);
                    if(p[2]==undefined&&p[1]==undefined) return p[0];
                    return [p[2],p[1],p[0] ].join(".")
                };
                $.each(responseItems, (i, items)=>{
                let result = '<li><img class="imgList" src="'+ items.volumeInfo.imageLinks.smallThumbnail +'" />';
                    result+= items.volumeInfo.title+', ' ;
                    result+= items.volumeInfo.authors+', ';
                    result+= convertDate(items.volumeInfo.publishedDate) +' <button id="'+i+'" class="button">Заказать</button></li>';
                    $result.append(result);

                });
                $result.wrapInner('<ul>');

                $(".button").click( event => {
                    let $orderInformation = $("#orderInformation");
                    let orderInformation;
                    if(responseItems[event.target.id].volumeInfo.description === undefined){
                        orderInformation = '<img src="'+responseItems[event.target.id].volumeInfo.imageLinks.smallThumbnail+'" />';
                    }
                    else {
                        orderInformation = '<img class="orderImg" src="'+responseItems[event.target.id].volumeInfo.imageLinks.smallThumbnail+'" />'+responseItems[event.target.id].volumeInfo.description;
                    }
                    $orderInformation.empty().append(orderInformation);
                    $(".popup").fadeIn(200);
                    $(".popup_bg").click(()=>{
                        $(".popup").fadeOut(200);
                    });
                    $('#form').validate({
                        rules: {
                            name: {
                                required: true,
                                minlength: 2
                            },
                            email: {
                                required: true,
                                email: true
                            },
                            tel: {
                                required: true,
                                pattern: '^\\+380\\d{3}\\d{2}\\d{2}\\d{2}$',
                            }
                        },
                        messages: {
                            name: {
                                required: "Поле 'Имя' обязательно к заполнению",
                                minlength: "Введите не менее 2-х символов в поле 'Имя'"
                            },
                            email: {
                                required: "Поле 'Email' обязательно к заполнению",
                                email: "Необходим формат адреса email"
                            },
                            tel: {
                                required: "Поле 'Номер' обязательно к заполнению ",
                                pattern: "Введите телефон в правильном формате"
                            },

                        },
                        submitHandler: form => {
                            let $order = $("#order");
                            $(".popup").fadeOut(200);
                            let name = $("input[type='text']").val();
                            let email = $("input[type='email']").val();
                            let phone = $("input[type='tel']").val();
                            let order = '<li>'+'<img class="imgList" src="'+responseItems[event.target.id].volumeInfo.imageLinks.smallThumbnail+'" />';
                                order += responseItems[event.target.id].volumeInfo.title+', ';
                                order += convertDate(responseItems[event.target.id].volumeInfo.publishedDate)+', ';
                                order += 'Имя: '+name+', Email: '+ email+', Номер телефона: ' + phone +'</li>';
                            $order.append(order);
                            $(".formOrder").val('');
                        }
                    });
                });
            });
        }
        return false;
    });

});