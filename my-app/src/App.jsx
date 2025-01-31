/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import styles from './app.module.css';

function App() {
	// Текущее значение, которое пользователь вводит
	const [value, setValue] = useState('');

	// Список элементов, добавленных пользователем
	const [list, setList] = useState([]);

	// Ошибка, которая будет отображаться, если введено некорректное значение
	const [error, setError] = useState('');

	// Состояние для проверки валидности введенного значения
	const [isValueValid, setIsValueValid] = useState('false');

	// Обработчик кнопки "Ввести новое"
	const onInputButtonClick = () => {
		// Запрашиваем новое значение у пользователя
		const promptValue = prompt('Введите значение').trim();

		// Валидируем введенное значение: оно должно содержать минимум 3 символа
		if (promptValue.length < 3) {
			setError('Введенное значение должно содержать минимум 3 символа'); // Если не прошло валидацию, показываем ошибку
			setIsValueValid(false); // Устанавливаем флаг невалидности
		} else {
			// Если значение валидно, очищаем ошибку и сохраняем значение в состоянии
			setError('');
			setValue(promptValue);
			setIsValueValid(true); // Устанавливаем флаг валидности
		}
	};

	// Обработчик кнопки "Добавить в список"
	const onAddButtonClick = () => {
		// Если введенное значение валидно, добавляем его в список
		if (isValueValid) {
			setList((prevList) => [...prevList, { id: Date.now(), value }]); // Добавляем новый элемент в список с уникальным id
			setValue(''); // Очищаем поле ввода
			setError(''); // Очищаем ошибку
			setIsValueValid(false); // Устанавливаем флаг невалидности
		}
	};

	// HTML-разметка для списка элементов
	const listHTML = (
		<ul className={styles.list}>
			{list.map(({ id, value }) => (
				<li key={id}>{value}</li> // Для каждого элемента списка создаем <li> с уникальным ключом id
			))}
		</ul>
	);

	return (
		<>
			<div className={styles.app}>
				<h1 className={styles.pageHeading}>Ввод значения</h1>
				<p className={styles.noMarginText}>
					Текущее значение <code>value</code>: "
					<output className={styles.currentValue}>{value}</output>"
				</p>

				{/* Рендерим ошибку, если она существует */}
				{error !== '' && <div className={styles.error}>{error}</div>}

				{/* Кнопки для ввода нового значения и добавления в список */}
				<div className={styles.buttonsContainer}>
					<button className={styles.button} onClick={onInputButtonClick}>
						Ввести новое
					</button>
					<button
						className={styles.button}
						disabled={!isValueValid} // Отключаем кнопку, если значение невалидно
						onClick={onAddButtonClick}
					>
						Добавить в список
					</button>
				</div>

				{/* Контейнер для отображения списка или сообщения о пустом списке */}
				<div className={styles.listContainer}>
					<h2 className={styles.listHeading}>Список:</h2>
					{list.length > 0 ? (
						listHTML // Если в списке есть элементы, рендерим его
					) : (
						<p className={styles.noMarginText}>Нет добавленных элементов</p> // Если список пуст, показываем сообщение
					)}
				</div>
			</div>
		</>
	);
}

export default App;
