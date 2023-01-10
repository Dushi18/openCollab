import React from 'react';
import vg from "../assets/2.png";
import{AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram} from "react-icons/ai";


export const Home = () => {
  return (
    <>
    <div className='home' id='home'>
        <main>
            <h1>
                Open Collaboration 
            </h1>
            <p>Collaborate with  IoT based projects.</p>
        </main>
    </div>
    <div className='home2'>
        <img src={vg} alt="not supported"/>
        <div>
            <p>
                Hi everyone. We have built many bots and projects using Arduino boards. Now we want to work with a team on more improved projects. Anyone interested to work with us on IoT based projects can contact us as soon as possible. You can visit our projects on this page. Your feedback would be happily received.  
            </p>
        </div>
    </div>
    <div className="home3" id='about'>
        <div>
            <h1>Who are we?</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam ipsum excepturi molestiae eos consequatur tenetur eligendi atque quisquam explicabo, unde assumenda possimus natus dolor in vitae quos, harum earum mollitia qui officiis? Culpa atque magnam suscipit sapiente odit velit natus doloremque, aliquid officiis consectetur, neque enim consequatur doloribus tenetur pariatur cumque magni exercitationem iusto vel aliquam nostrum quam soluta beatae possimus! Consequatur ut consectetur nemo reprehenderit velit magni, veritatis, sit mollitia aut, ea temporibus quis nisi. Ut distinctio ea, aspernatur rem deserunt laboriosam dignissimos! At itaque dolor officia, obcaecati magni beatae quas, quae ratione nulla corrupti impedit harum, earum laboriosam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, quas iste? Quis libero quo quae, iusto corrupti consequuntur soluta ex tempora? Fuga, totam tempora. Alias cupiditate quae modi soluta porro. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium vero culpa odio. Laborum vero fugit id, eligendi quibusdam dignissimos quia sed ipsa autem ut et reprehenderit ex ducimus minus corporis doloremque culpa sequi, placeat eum delectus magni molestias! Accusamus praesentium, suscipit illo non doloribus cupiditate obcaecati consequuntur possimus est laudantium!
            </p>
        </div>
    </div>
    <div className="home4" id='brands'>
        <div>
            <h1> Brands </h1>
            <article>
                <div style={{
                    animationDelay: "0.3s",
                }}>
                    <AiFillGoogleCircle />
                    <p>Google</p>
                </div >
                <div style={{
                    animationDelay: "0.5s",
                }}>
                    <AiFillAmazonCircle />
                    <p>Amazon</p>
                </div>
                <div style={{
                    animationDelay: "0.7s",
                }}>
                    <AiFillYoutube />
                    <p>Youtube</p>
                </div>
                <div style={{
                    animationDelay: "0.9s",
                }}>
                    <AiFillInstagram />
                    <p>Instagram</p>
                </div>
            </article>
        </div>
    </div>
    </>
  )
}
