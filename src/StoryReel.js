import React from "react";
import "./StoryReel.css";
import Story from "./Story";
import { useStateValue } from "./StateProvider";

function StoryReel() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="storyReel">
      <Story
        image="https://pmcvariety.files.wordpress.com/2017/05/mark-zuckerberg.jpg"
        profileSrc={user.photoURL}
        title={user.displayName}
      />
      <Story
        image="https://cdn.i-scmp.com/sites/default/files/styles/768x768/public/d8/images/methode/2020/01/20/4a4e9222-3b22-11ea-a16e-39b824591591_image_hires_125200.jpg?itok=TOM00-Yn&v=1579495927"
        profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQGPUAJIT55edKTUeQeFUFsiZ9KvSX5ISfrPfi8sXRrQLYgqW2l0LJpr3KCcDKYGoyI4h1Kwd9aYKAadYmgDliJHaPZPi62lTZWBg&usqp=CAU&ec=45702846"
        title="Jeff Bezos"
      />
      <Story
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Bill_og_Melinda_Gates_2009-06-03_%28bilde_01%29.JPG/330px-Bill_og_Melinda_Gates_2009-06-03_%28bilde_01%29.JPG"
        profileSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Bill_Gates_2018.jpg/330px-Bill_Gates_2018.jpg"
        title="Bill Gates"
      />
      <Story
        image="https://images.financialexpress.com/2016/04/sundar-pichai-ap.jpg"
        profileSrc="https://pakwired.com/wp-content/uploads/2020/06/Sundar-Pichai-Google-.jpg"
        title="Sundar Pichai"
      />
      <Story
        image="https://i.insider.com/570bcc2a52bcd022008bbf7a?width=400&format=jpeg&auto=webp"
        profileSrc="http://2day.sweetsearch.com/wp-content/uploads/Steve-Jobs.jpg"
        title="Steve Jobs"
      />
    </div>
  );
}

export default StoryReel;
