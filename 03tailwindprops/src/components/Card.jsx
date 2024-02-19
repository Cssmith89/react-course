import React from 'react'

function Card({username = " HC ", post = "Not assigned yet"}) {
    console.log(props)
  return (
    <div>
        <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://images.pexels.com/photos/20079577/pexels-photo-20079577/free-photo-of-a-squirrel-sitting-on-a-tree-branch-with-a-nut-in-its-mouth.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" width="384" height="512"/>
  <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est ex distinctio saepe eligendi ut nulla voluptas beatae veritatis. Deleniti atque est neque nulla dignissimos corrupti dolorem debitis, dicta natus ipsum?
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-500 dark:text-sky-400">
        {username}
      </div>
      <div className="text-slate-700 dark:text-slate-500">
        {post}
      </div>
    </figcaption>
  </div>
</figure>
</div>
  )
}

export default Card