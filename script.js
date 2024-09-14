const comment_url =
  "https://openapi.programming-hero.com/api/retro-forum/posts";

const loadData = async () => {
  const comment_res = await fetch(comment_url);
  const comment_result = await comment_res.json();
  const comment_data = comment_result.posts;
  displayData(comment_data);
};

loadData();

const displayData = (data) => {
  const commentContainer = document.getElementById("comment-container");
  data.forEach((comment) => {
    const title = comment.title;
    const view = comment.view_count;
    const commentCard = document.createElement("div");
    commentCard.classList = `grid grid-cols-5 p-7 rounded-2xl shadow-2xl bg-gray-50`;
    commentCard.innerHTML = `
      <!-- card img -->
      <div class="flex justify-center">
        <img
          src="${comment.image}"
          alt=""
          class="w-40 h-40 rounded-full border-2 border-black p-7"
        />
      </div>
      <!-- card text -->
      <div id="card-text-container" class="grid col-span-4 gap-7 p-7">
        <div id="category-author">
          <ul class="flex gap-6">
            <li># ${comment.category}</li>
            <li>Author: ${comment.author.name}</li>
          </ul>
        </div>
        <div class="text-4xl">${comment.title}</div>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptas possimus nihil quas minus quam? Nesciunt, placeat
            molestias? Aut inventore dolorem quibusdam dolores.
          </p>
        </div>
        <hr />
        <!-- comment views and messages -->
        <div class="flex justify-between items-center">
          <div class="icons">
            <ul class="flex justify-between gap-8">
              <li><a href="">comment : ${comment.comment_count}</a></li>
              <li><a href="">view : ${comment.view_count}</a></li>
              <li><a href="">time : ${comment.posted_time}</a></li>
            </ul>
          </div>
        <button onclick="markedAsRead('${title}','${view}')" class="btn btn-primary">message</button>
        </div>
      </div>
    `;
    commentContainer.appendChild(commentCard);
  });
};

let counter = 0;
const markedAsRead = (title, view) => {
  const readMsgContainer = document.getElementById("read-msg-container");
  const readMsgCard = document.createElement("div");
  readMsgCard.classList = `flex justify-between p-4 bg-white rounded-xl shadow-2xl`;
  readMsgCard.innerHTML = `
    <div>${title}</div>
    <div>${view}</div>
  `;
  readMsgContainer.appendChild(readMsgCard);
  counter++;
  const markCounter = document.getElementById("mark-counter");
  markCounter.innerText = counter;
};
