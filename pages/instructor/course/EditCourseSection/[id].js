import React, { useEffect, useState } from "react";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import CourseUpdateForm from "@/components/Instructor/CourseSection";
import { useRouter } from "next/router";
import axios from "axios";
import { parseCookies } from "nookies";
import baseUrl2 from "@/utils/baseUrl2";
import PageNavigation from "../../../../components/Instructor/PageNavigation";
import CourseSection from "@/components/Instructor/CourseSection";
import EditCourseSection  from "@/components/Instructor/EditCourseSection";

const EditSection = ({ user }) => {
    const { charuvidhya_users_token } = parseCookies();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter();
    const { id: courseId } = router.query;
    const [course, setCourse] = useState({});

    useEffect(() => {
        const fetchCourse = async () => {
            const payload = {
                headers: { Authorization:"Bearer "+ charuvidhya_users_token },
            };
            const url = `${baseUrl2}/api/courses/${courseId}`;
            const response = await axios.get(url, payload);
            setCourse(response.data.course);
        };

        fetchCourse();
    }, []);

    return (
        <>
            <Navbar user={user} />

            <div className="ptb-100">
                <div className="container">
                    <PageNavigation
                        courseId={courseId}
                        activeClassname="EditSection"
                    />

                    <div className="create-course-form">
                        {/*<CourseSection courseId={courseId} />*/}
                        {/*{ <CourseSection courseId={courseId} /> }*/}
                        {/* eslint-disable-next-line react/no-unknown-property */}
                        {course && <EditCourseSection courseData={course} />}
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default EditSection;
