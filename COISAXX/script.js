/** **************** */
var reasons = [
    {
      id: 1,
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTibgpKdRMYH6ljBd109Rq1CYfL25GIEsrF8g&s",
      title: "COISAX ???",
      description: "KING DO DISCORD"

    },
    {
      id: 2,
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQtqp1R9GoRI92VOrJysy_lEWnldzZPRaBefF2Y8SizTr00Ey4Gu8BnNCwafdar6CRpk0&usqp=CAU",
      title: "Title",
      description: "Ut ex augue, venenatis sit amet ultricies sit amet, malesuada eu justo. Donec elementum rhoncus nulla varius posuere."
    },
    {
      id: 3,
      imageUrl: "https://picsum.photos/300/160/?image=122",
      title: "Title",
      description: "Quisque sapien elit, scelerisque eu ex at, hendrerit tincidunt elit. Morbi ac porttitor risus, et molestie massa. Proin consequat odio vitae efficitur scelerisque. Aenean mattis venenatis lacus."
    },
    {
      id: 4,
      imageUrl: "https://picsum.photos/300/160/?image=129",
      title: "Title",
      description: "Etiam in erat at eros volutpat ullamcorper. Morbi sit amet porttitor diam, in dapibus eros. Aenean et velit non orci interdum dictum. Donec eleifend finibus ex, id ultrices turpis fringilla ut."
    },
    {
      id: 5,
      imageUrl: "https://picsum.photos/300/160/?image=152",
      title: "Title",
      description: "Ut ex augue, venenatis sit amet ultricies sit amet, malesuada eu justo. Donec elementum rhoncus nulla varius posuere."
    },
    {
      id: 6,
      imageUrl: "https://picsum.photos/300/160/?image=166",
      title: "Title",
      description: "Quisque sapien elit, scelerisque eu ex at, hendrerit tincidunt elit. Morbi ac porttitor risus, et molestie massa. Proin consequat odio vitae efficitur scelerisque. Aenean mattis venenatis lacus."
    },
    {
      id: 7,
      imageUrl: "https://picsum.photos/300/160/?image=171",
      title: "Title",
      description: "Quisque sapien elit, scelerisque eu ex at, hendrerit tincidunt elit. Morbi ac porttitor risus, et molestie massa. Proin consequat odio vitae efficitur scelerisque. Aenean mattis venenatis lacus."
    },
    {
      id: 8,
      imageUrl: "https://picsum.photos/300/160/?image=248",
      title: "Title",
      description: "Quisque sapien elit, scelerisque eu ex at, hendrerit tincidunt elit. Morbi ac porttitor risus, et molestie massa. Proin consequat odio vitae efficitur scelerisque. Aenean mattis venenatis lacus."
    },
    {
      id: 9,
      imageUrl: "https://picsum.photos/300/160/?image=365",
      title: "Title",
      description: "Quisque sapien elit, scelerisque eu ex at, hendrerit tincidunt elit. Morbi ac porttitor risus, et molestie massa. Proin consequat odio vitae efficitur scelerisque. Aenean mattis venenatis lacus."
    },
    {
      id: 10,
      imageUrl: "https://picsum.photos/300/160/?image=373",
      title: "Title",
      description: "Quisque sapien elit, scelerisque eu ex at, hendrerit tincidunt elit. Morbi ac porttitor risus, et molestie massa. Proin consequat odio vitae efficitur scelerisque. Aenean mattis venenatis lacus."
    },
  ];
  /** **************** */
  
  function changeBackgroundRandom() {
    const color = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    $("#circle").css({"background": color});
  }
  
  function swipeCard(direction) {
    const cards = $("#cards");
    let active = cards.find(".card-active");
    let cb1 = active.next(".card");
    let cb2 = cb1.next(".card");
    
    const transform = direction === "right"
      ? "translate(calc(-50% + 150px), -50%) rotate(20deg)"
      : "translate(calc(-50% - 150px), -50%) rotate(-20deg)";
    
    changeBackgroundRandom();
    
    active.css({
      "transform": transform,
      "opacity": 0
    });
    
    setTimeout(() => {
      active.removeClass("card-active");
      active = cb1;
      cb1 = active.next(".card");
      cb2 = cb1.next(".card");
      active.addClass("card-active").removeClass("cb1");
      cb1.addClass("cb1").removeClass("cb2");
      cb2.addClass("cb2").removeClass("card-hide");
    }, 300); // Ajuste este tempo para corresponder à duração da transição CSS
  }
  
  function loadCards() {
    const $cards = $("#cards");
    
    reasons.forEach(reason => {
      const card = `
        <div class="card">
          <div class="card-image">
            <img src="${reason.imageUrl}" alt="">
          </div>
          <div class="card-content">
            <div class="card-content_desc">
              <h1>${reason.title}</h1>
              <p>${reason.description}</p>
            </div>
          </div>
          <div class="card-buttons cf">
            <div class="btn">
              <button class="dislikeBtn">Dislike</button>
            </div>
            <div class="btn">
              <button class="likeBtn">Like</button>
            </div>
          </div>
        </div>
      `;
      
      $cards.append(card);
    });
  
    // Inicializar os estados dos cards
    const $allCards = $cards.find(".card");
    $allCards.first().addClass("card-active");
    $allCards.not(".card-active").addClass("card-hide");
    $allCards.eq(1).addClass("cb1");
    $allCards.eq(2).addClass("cb2");
  
    changeBackgroundRandom();
  }
  
  $(document).ready(function() {
    loadCards();
    
    $("#cards").on("click", ".likeBtn", function() {
      swipeCard("right");
    });
  
    $("#cards").on("click", ".dislikeBtn", function() {
      swipeCard("left");
    });
  });
  