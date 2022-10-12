import React from 'react'

const Blog = () => {
  return (
		<div className='container mx-auto'>
			<div className='bg-primary rounded-lg p-10 space-y-5'>
				{/* question 1 */}
				<article className='bg-white p-5 rounded-lg space-y-2'>
					<h4 className='font-bold text-xl'>
						1) What is the purpose of react router?
					</h4>
					<p>
						React Router is a standard library for routing in React.
						It enables the navigation among views of various
						components in a React Application, allows changing the
						browser URL, and keeps the UI in sync with the URL.
					</p>
				</article>
				<article className='bg-white p-5 rounded-lg space-y-2'>
					<h4 className='font-bold text-xl'>
						2) How does context api work?
					</h4>
					<p>
						The React Context API is a way for a React app to
						effectively produce global variables that can be passed
						around. This is the alternative to "prop drilling" or
						moving props from grandparent to child to parent, and so
						on. Context is also touted as an easier, lighter
						approach to state management using Redux.
					</p>
				</article>
				<article className='bg-white p-5 rounded-lg space-y-2'>
					<h4 className='font-bold text-xl'>
						3) What is useRef hook?
					</h4>
					<p>
						The useRef Hook allows you to persist values between
						renders. It can be used to store a mutable value that
						does not cause a re-render when updated. It can be used
						to access a DOM element directly.
					</p>
				</article>
			</div>
		</div>
  );
}

export default Blog