import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { BsEye } from 'react-icons/bs';

const McqContainer = () => {
	const { id } = useParams();
	const [quiz, setQuiz] = useState(null);
	const [revealAnswer, setIsRevealAnswer] = useState([]);

	useEffect(() => {
		axios
			.get(`https://openapi.programming-hero.com/api/quiz/${id}`)
			.then((response) => {
				setQuiz(response.data.data);
			});
	}, [id]);

	const checkOption = (correctAnswer, selectedOption) => {
		if (correctAnswer === selectedOption) {
			toast('Correct Answer!');
		} else {
			toast('Wrong Answer!!!!');
		}
	};

	const handleRevealAnswer = (quesId) => {
        // here we maintain an array, where we keep those question ids, whose correct answer must be revealed
        if(revealAnswer.includes(quesId)) {
            // if reveal answer already include the question, we remove it by filtering the array 
            const newArray = revealAnswer.filter((id) => id != quesId);
            setIsRevealAnswer(() => [...newArray]);
        } else {
            // means we need to add the question into the array
            setIsRevealAnswer(() => [...revealAnswer, quesId]);
        }
    };

	return (
		<div className='bg-primary py-10'>
			<div className='container mx-auto bg-white rounded-lg p-10 space-y-10'>
				{/* intro */}
				<div className=''>
					<h1 className='text-5xl'>{quiz && quiz.name}</h1>
					<p>{quiz && quiz.total} questions</p>
				</div>
				{/* questions */}
				<div className='space-y-5'>
					{!quiz
						? 'loading....'
						: quiz.questions.map((ques) => (
								<article className='space-y-5' key={ques.id}>
									{/* question title */}
									<div className='flex justify-between items-center'>
										{/* question */}
										<p className='font-bold'>{`${ques?.question.slice(
											3,
											ques.question.length - 4
										)}`}</p>
										{/* reveal button */}
										<button
											onClick={() =>
												handleRevealAnswer(ques.id)
											}
											className='p-2 rounded-circle bg-green-200 text-primary'
										>
											<BsEye />
										</button>
									</div>
									{/* options */}
									<div className='space-y-2'>
										{ques.options.map(
											(option, optionIdx) => (
												<>
                                                {/* first we check if this question is included in revealAnswer array
                                                then we check if this option is the correct answer, if so we change background */}
													<button
														className={`block space-x-2 px-4 py-2 rounded-lg border shadow w-full text-left ${
															revealAnswer.includes(
																ques.id
															) &&
															ques.correctAnswer ===
																option &&
															'bg-green-400 text-white'
														}`}
														key={optionIdx}
														onClick={() =>
															checkOption(
																ques.correctAnswer,
																option
															)
														}
													>
														<span>
															{optionIdx + 1})
														</span>
														<span>{option}</span>
													</button>
												</>
											)
										)}
									</div>
									{/* eye button */}
								</article>
						  ))}
				</div>
			</div>
		</div>
	);
};

export default McqContainer;
