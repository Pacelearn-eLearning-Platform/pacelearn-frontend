import React from "react";
import Link from "next/link";

const CoursesCard = ({
	id,
	courseTitle,
	courseCreatedOn,
	courseDescription,
	courseLogo,
	courseObjectives,
	courseSubTitle,
	user: { firstName, lastName, imageUrl },
	enrolledUsersLists = [],
	onDelete,
}) => {
	return (
		<div className="col-lg-4 col-md-6">
			<div className="teacher-courses-box">
				<div className="courses-image">
					{/*{is_class ? (*/}
					{/*	<Link href={`/learning/course/class/${slug}`}>*/}
					{/*		<a className="d-block image">*/}
					{/*			<img*/}
					{/*				src={*/}
					{/*					image*/}
					{/*						? image*/}
					{/*						: "/images/courses/courses1.jpg"*/}
					{/*				}*/}
					{/*				alt="image"*/}
					{/*			/>*/}
					{/*		</a>*/}
					{/*	</Link>*/}
					{/*) : (*/}
						<Link href={`/course/${id}`}>
							<a className="d-block image">
								<img
									src={
										courseLogo
											? courseLogo
											: "/images/courses/courses1.jpg"
									}
									alt="image"
								/>
							</a>
						</Link>
					{/*)}*/}

					<div className="dropdown action-dropdown">
						<div className="icon">
							<i className="bx bx-dots-vertical-rounded"></i>
						</div>
						<ul className="dropdown-menu">
							<li>
								<Link href={`/instructor/course/edit/${id}`}>
									<a className="dropdown-item">
										{" "}
										<i className="bx bx-edit"></i> Edit
										Course
									</a>
								</Link>
							</li>
							<li>
								<Link href={`/instructor/course/upload/${id}`}>
									<a className="dropdown-item">
										<i className="bx bx-cloud-upload"></i>{" "}
										Upload Video
									</a>
								</Link>
							</li>
							<li>
								<Link href={`/instructor/course/uploads/${id}`}>
									<a className="dropdown-item">
										<i className="bx bxs-edit-alt"></i> Edit
										Video
									</a>
								</Link>
							</li>
							{/*<li>*/}
							{/*	<Link href={`/instructor/course/assets/${id}`}>*/}
							{/*		<a className="dropdown-item">*/}
							{/*			<i className="bx bxs-file-plus"></i>{" "}*/}
							{/*			Assets*/}
							{/*		</a>*/}
							{/*	</Link>*/}
							{/*</li>*/}
							<li>
								<button
									onClick={() => onDelete(id)}
									type="button"
									className="dropdown-item"
								>
									<i className="bx bxs-trash"></i> Delete
								</button>
							</li>
						</ul>
					</div>

					{/*<>*/}
					{/*	{before_price > 0 && (*/}
					{/*		<div className="price shadow discount-price">*/}
					{/*			<del>${before_price}</del>*/}
					{/*		</div>*/}
					{/*	)}*/}
					{/*	<div className="price shadow">*/}
					{/*		${latest_price > 0 ? latest_price : "Free"}*/}
					{/*	</div>*/}
					{/*</>*/}
				</div>
				<div className="courses-content">
					<div className="course-author d-flex align-items-center">
						<img
							src={
								imageUrl
									? imageUrl
									: "/images/avatar.jpg"
							}
							className="rounded-circle"
							alt={firstName}
						/>
						<span>{`${firstName} ${lastName}`}</span>
					</div>

					<h3>
						{/*{is_class ? (*/}
						{/*	<Link href={`/learning/course/class/${slug}`}>*/}
						{/*		<a>{courseTitle.slice(0, 40)}...</a>*/}
						{/*	</Link>*/}
						{/*) : (*/}
							<Link href={`/course/${id}`}>
								<a>{courseTitle.slice(0, 40)}</a>
							</Link>
						{/*)}*/}
					</h3>

					<p>{courseDescription.slice(0, 108)}</p>
					<ul className="courses-box-footer d-flex justify-content-between align-items-center">
						{/*<li>*/}
						{/*	<i className="flaticon-agenda"></i> {lessons}{" "}*/}
						{/*	Lessons*/}
						{/*</li>*/}
						<li>
							<i className="flaticon-people"></i>{" "}
							{enrolledUsersLists.length} Students
						</li>
						<li>
							<p style={{color:"#454545",marginLeft : "50px",textAlign:"right", fontSize:"13px"}}> created on: <br/>{courseCreatedOn}</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default CoursesCard;
