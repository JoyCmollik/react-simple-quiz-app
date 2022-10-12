import React, { useEffect, useState } from 'react';
import heroImg from '../../images/hero.png';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
    const [quizTopic, setQuizTopic] = useState([]);


    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/quiz').then(response => {
            setQuizTopic(response.data.data);
        });
    }, []);

	return (
		<div className='container mx-auto'>
			{/* start of hero banner */}
			<div className='grid text-center xl:text-left xl:grid-cols-2 items-center'>
				<div className=''>
					<img
						className='object-cover w-8/12 mx-auto xl:mx-0'
						src={heroImg}
						alt='hero'
					/>
				</div>
				<div className='space-y-8'>
					<h1 className='text-5xl font-bold tracking-wide'>
						Nurture your coding <br /> skills
					</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Placeat hic omnis ratione reiciendis eius in ut dolore,
						eaque odit vero porro consequuntur asperiores? Nihil
						eius obcaecati et sequi, eveniet amet aperiam odit velit
						repellat porro doloremque, sunt rerum quibusdam. Eius
						accusamus, fugit iusto, alias asperiores vel esse
						commodi dolorum inventore quisquam similique laboriosam
						tempora, repudiandae consequatur necessitatibus
						praesentium voluptates repellat porro pariatur aliquid
						dicta illo. Nostrum deserunt rem necessitatibus ducimus,
						pariatur explicabo, rerum voluptate modi iusto suscipit
						accusamus impedit, a vel reiciendis. Perspiciatis,
						possimus nam placeat enim, numquam fugiat aut voluptas
						unde cum error non. Officia consequuntur tempora modi
						perferendis.
					</p>
				</div>
			</div>
			{/* end of hero banner */}

			{/* start of mcq cards */}
			<div>
				<div className='grid lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 bg-primary p-10 rounded-lg'>
					{!quizTopic
						? 'loading'
						: quizTopic.map(({ id, name, logo, total }) => (
								<>
									{/* question card */}
									<article
										className='border rounded-lg p-5 space-y-5'
										key={id}
									>
										{/* img */}
										<img
											className='shadow'
											src={logo}
											alt=''
										/>
										{/* buttons */}
										<div className='flex justify-between items-center'>
											{/* name, totalcount */}
											<div className='flex justify-between items-center space-x-2'>
												<p className='bg-secondary px-5 py-2 rounded-lg font-bold'>
													{name}
												</p>
												<p className='bg-secondary px-5 py-2 rounded-lg font-bold'>
													{total} Mcq
												</p>
											</div>
											{/* start button */}
											<Link to={`quiz/${id}`}>
												<button className='bg-light px-5 py-2 rounded-lg font-bold'>
													Start
												</button>
											</Link>
										</div>
									</article>
								</>
						  ))}
				</div>
			</div>
			{/* end of mcq cards */}
		</div>
	);
};

export default Home;
