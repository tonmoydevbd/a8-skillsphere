import Image from "next/image";
import { FaCircleDot } from "react-icons/fa6";

const CourseDetails = async ({ params }) => {
  const { id } = await params;
  const res = await fetch('https://a8-skillsphere.vercel.app/data.json')
  const allCourses = await res.json()
  const course = allCourses.find(c => c.id == id)
  console.log(course.curriculum)
  console.log(course.category)
  return (
    <div className="card bg-base-100 w-4xl text-center shadow-sm mx-auto my-4">
      <h2 className="card-title mx-auto mb-4 text-3xl">{course.title}</h2>
      <figure>
        <Image
          src={course.image}
          width={500}
          height={500}
          alt={course.title}
        />
      </figure>
      <div className="card-body">
        <div className="text-left  flex flex-col gap-4">
          <p>{course.description}</p>
          <p><span className="font-bold">Instructor : </span>{course.instructor}</p>
          <p><span className="font-bold">Duration : </span>{course.duration}</p>
          <p><span className="font-bold">Rating : </span>{course.rating}</p>
          <p><span className="font-bold">Level : </span>{course.level}</p>
          <p><span className="font-bold">Category : </span>{course.category}</p>
          <div>
            <h3 className="font-bold">Course curriculum:</h3>
            <ul>
              {course.curriculum.map((item, index) => <li className="flex gap-2 items-center" key={index}><FaCircleDot />{item}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseDetails;