import React from "react";

function Cards() {
  return (
    <div className="transition-all duration-300 ease-in-out">
      <div>
        <h1 className="font-semibold text-2xl text-[#012970]">Cards</h1>
        <ul className="flex gap-3 font-semibold">
          <li>
            <a href="#" className="text-[#899bbd]">
              Home /
            </a>
          </li>
          <li className="text-[#899bbd]">Components /</li>
          <li className="text-[#51678f]">Cards</li>
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 py-4">
        <div className="md:col-span-2">
          <div className="rounded-md bg-white p-4">
            <h2 className="font-semibold text-2xl text-[#012970] mb-2">
              Default Card
            </h2>
            <p>
              Ut in ea error laudantium quas omnis officia. Sit sed praesentium
              voluptas. Corrupti inventore consequatur nisi necessitatibus modi
              consequuntur soluta id. Enim autem est esse natus assumenda. Non
              sunt dignissimos officiis expedita. Consequatur sint repellendus
              voluptas. Quidem sit est nulla ullam. Suscipit debitis ullam iusto
              dolorem animi dolorem numquam. Enim fuga ipsum dolor nulla quia
              ut. Rerum dolor voluptatem et deleniti libero totam numquam nobis
              distinctio. Sit sint aut. Consequatur rerum in.
            </p>
          </div>

          <div className="bg-white p-4 mt-6 rounded-md max-w-full mx-auto overflow-hidden">
            <div className="p-2 border-b border-gray-200">
              <h2 className="text-[#899bbd] text-lg font-normal">Header</h2>
            </div>
            <div className="py-6">
              <p className="font-semibold text-2xl text-[#012970] mb-4">
                Card with header and footer
              </p>
              <p>
                Ut in ea error laudantium quas omnis officia. Sit sed
                praesentium voluptas. Corrupti inventore consequatur nisi
                necessitatibus modi consequuntur soluta id. Enim autem est esse
                natus assumenda. Non sunt dignissimos officiis expedita.
                Consequatur sint repellendus voluptas. Quidem sit est nulla
                ullam. Suscipit debitis ullam iusto dolorem animi dolorem
                numquam. Enim fuga ipsum dolor nulla quia ut. Rerum dolor
                voluptatem et deleniti libero totam numquam nobis distinctio.
                Sit sint aut. Consequatur rerum in.
              </p>
            </div>
            <div className="p-2 border-t border-gray-200">
              <button className="text-[#899bbd] text-lg font-normal">
                Footer
              </button>
            </div>
          </div>

          <div className="bg-white mt-6 rounded-md max-w-full overflow-hidden md:flex">
            <img
              src="/images/card-image-1.jpg"
              alt="card image"
              className="md:h-40 md:w-40 md:mb-8"
            />
            <div className="px-4 py-4">
              <h2 className="font-semibold text-2xl text-[#012970] mb-4">
                Card with an image on left
              </h2>
              <p>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>

        <div className="md:col-span-1">
          <div className="bg-white rounded-md max-w-lg max-h-1/2 ">
            <img src="/images/card-image-2.jpg" alt="card image" />
            <div className="p-4">
              <h2 className="font-semibold text-2xl text-[#012970] mb-4">Card with an image on top</h2>
              <p>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>

          <div className="bg-white mt-2 rounded-md max-w-lg max-h-1/2 overflow-hidden">
            <div className="p-4">
              <h2 className="font-semibold text-2xl text-[#012970] mb-4">Card with an image on bottom</h2>
              <p>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
            <img src="/images/card-image-2.jpg" alt="card image" />
          </div>
        </div>


        <div className="md:col-span-1">

          <div className="relative bg-white rounded-xl shadow-md overflow-hidden max-h-1/3 max-w-lg">
            <img src="/images/card-image-1.jpg" alt="card-image" className="w-full h-56 object-cover opacity-50" />
            <div className="absolute inset-0 transition-all duration-500"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
              <h5 className="font-semibold text-2xl text-[#012970] mb-4">Card with Image Overlay</h5>
              <p className="text-black">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-md max-h-fit max-w-lg mt-3 p-4">
            <h5 className="font-semibold text-2xl text-[#012970] mb-4">Card with titles, buttons, and links</h5>
            <h6 className="text-[#212529bf]">Card Subtitle</h6>
            <p className="py-3">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
            <button className="rounded-md bg-blue-500 text-white w-fit h-fit px-4 py-2 font-semibold cursor-pointer transition-colors hover:bg-blue-600">Button</button>
            <div className="flex gap-10 mt-4 text-blue-600">
              <a href="/" className="transition-colors hover:text-blue-400">Card link</a>
              <a href="/" className="transition-colors hover:text-blue-400">Another link</a>
            </div>
          </div>

          <div className="bg-white rounded-md max-h-1/3 max-w-lg mt-4 py-3">
            <div className="border-b border-gray-200">
              <div className="px-4 flex items-center gap-4 py-2">
                <div className="rounded-md bg-blue-500 text-white px-4 py-2 font-semibold cursor-pointer transition-colors hover:bg-blue-600">
                Active
              </div>
              <a href="/" className="transition-colors hover:text-blue-400 text-blue-600">Link</a>
              <span className="cursor-not-allowed text-gray-500">Disabled</span>
              </div>
            </div>
            <div className="items-center justify-center text-center p-4">
              <h5 className="font-semibold text-2xl text-[#012970] mb-3">
                Special title treatment
              </h5>
              <p className="mb-2">
                With supporting text below as a natural lead-in to additional content.
              </p>
              <button className="rounded-md bg-blue-500 text-white w-fit h-fit px-4 py-2 font-semibold cursor-pointer transition-colors hover:bg-blue-600"><a href="/">Go Somewhere</a></button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
export default Cards;
