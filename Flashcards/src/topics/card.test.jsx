import { describe, expect, it } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/react';
import Card from './Card';

// Tests that the card component renders correctly with valid input data.

describe('Card_function', () => {
	// Tests that the card component renders correctly with valid input data.
	it('test_card_renders_with_valid_input', () => {
		// Arrange
		const cards = [
			{
				question: 'Question 1',
				answer: 'Answer 1',
				options: ['Option 1', 'Option 2'],
			},
			{
				question: 'Question 2',
				answer: 'Answer 2',
				options: ['Option 3', 'Option 4'],
			},
		];

		// Act
		render(<Card cards={cards} />);

		// Assert
		expect(screen.getByText('Question 1')).toBeInTheDocument();
		expect(screen.getByText('Option 1')).toBeInTheDocument();
		expect(screen.getByText('Option 2')).toBeInTheDocument();
	});

	// Tests that the card flip animation works correctly.
	it('test_card_flip_animation', () => {
		// Arrange
		const cards = [
			{
				question: 'Question 1',
				answer: 'Answer 1',
				options: ['Option 1', 'Option 2'],
			},
			{
				question: 'Question 2',
				answer: 'Answer 2',
				options: ['Option 3', 'Option 4'],
			},
		];
		const { container } = render(<Card cards={cards} />);
		const cardContainer = container.querySelector('.card-container');

		// Act
		fireEvent.click(cardContainer);

		// Assert
		expect(container.querySelector('.card.back')).toBeInTheDocument();
	});
});

// Tests that the Prev and Next buttons work correctly.
	it('test_card_navigation_buttons', () => {
		// Arrange
		const cards = [
			{
				question: 'Question 1',
				answer: 'Answer 1',
				options: ['Option 1', 'Option 2'],
			},
			{
				question: 'Question 2',
				answer: 'Answer 2',
				options: ['Option 3', 'Option 4'],
			},
		];

		const { container } = render(<Card cards={cards} />);
		const nextButton = container.getByTestId('next-button');
		expect(nextButton).toBeInTheDocument();
		// // Act
		// fireEvent.click(nextButton);
		// expect(container.getByTestId('prev-button')).toBeInTheDocument();
		// // Assert
		// expect(container.getByText('Question 2').toBeInTheDocument());
});
/*

	
	// });
// const nextButton = container.querySelector('.next-button');
		const nextButton = screen.getByRole('button', { name: 'Next' });
		expect(nextButton).toBeInTheDocument();
		// Act
		// fireEvent.click(nextButton);

		// Assert
		// expect(screen.getByText('Question 2')).toBeInTheDocument();

		// const prevButton = container.querySelector('.prev-button');
		// const prevButton = screen.getByRole('button', { name: 'Prev' });
		// Act
		// fireEvent.click(prevButton);

		// Assert
		expect(screen.getByText('Question 1')).toBeInTheDocument();
	});
});
*/
// TEST 1
// const cards = [
// 	{
// 		question: 'What is the capital of France?',
// 		answer: 'Paris',
// 		options: ['Paris', 'London', 'Madrid', 'Rome'],
// 	},
// 	{
// 		question: 'What is the largest planet in our solar system?',
// 		answer: 'Jupiter',
// 		options: ['Mars', 'Jupiter', 'Venus', 'Saturn'],
// 	},
// ];
// describe('Card component', () => {
// 	test('renders the first card with question and options', () => {
// 		const { getByText } = render(<Card cards={cards} />);
// 		const question = getByText('What is the capital of France?');
// 		const option1 = getByText('Paris');
// 		const option2 = getByText('London');
// 		const option3 = getByText('Madrid');
// 		const option4 = getByText('Rome');
// 		expect(question).toBeInTheDocument();
// 		expect(option1).toBeInTheDocument();
// 		expect(option2).toBeInTheDocument();
// 		expect(option3).toBeInTheDocument();
// 		expect(option4).toBeInTheDocument();
// 	});
// 	test('flips the card when clicked', () => {
// 		const { getByText } = render(<Card cards={cards} />);
// 		fireEvent.click(getByText('What is the capital of France?'));
// 		const answer = getByText('Answer: Paris');
// 		expect(answer).toBeInTheDocument();
// 	});
// 	// test('disables the Prev button when on the first card', () => {
// 	// 	const { getByText } = render(<Card cards={cards} />);
// 	// 	const prevButton = getByText('Prev');
// 	// 	fireEvent.click(prevButton);
// 	// 	expect(prevButton).toBeDisabled();
// 	// });
// 	// test('disables the Next button when on the last card', () => {
// 	// 	const { getByText } = render(<Card cards={cards} />);
// 	// 	const nextButton = getByText('Next');
// 	// 	fireEvent.click(nextButton);
// 	// 	fireEvent.click(nextButton);
// 	// 	expect(nextButton).toBeDisabled();
// 	// });
// });