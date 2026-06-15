// import CourseCard from "../../../components/CourseCard";

import CourseCard from "@/components/CourseCard";


const AllCourses = async () => {

  const res = await fetch('https://a8-skillsphere.vercel.app/data.json')
  const allCourses = await res.json()

  return (
    <div className="max-w-7xl mx-auto my-15">
      <h2 className="text-2xl font-bold mt-2">All Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
        {allCourses.map(course => <CourseCard course={course} key={course.id}></CourseCard>)}
      </div>
    </div>
  )

}

export default AllCourses;