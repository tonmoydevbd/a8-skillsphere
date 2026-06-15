import CourseCard from "./CourseCard";

const PopularCoursesSecton = async () => {

  const res = await fetch('https://skillsphere-sooty.vercel.app/data.json')
  const allCourses = await res.json()

  const sortedCourses = allCourses?.sort((a, b) => b.rating - a.rating);
  const topCourses = sortedCourses?.slice(0, 3)
  console.log(topCourses)

  return (
    <div className="max-w-7xl mx-auto my-15">
      <h2 className="text-2xl font-bold mt-2">Popular Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
        {topCourses.map(course => <CourseCard course={course} key={course.id}></CourseCard>)}
      </div>
    </div>
  )

}

export default PopularCoursesSecton;