const tabLinksElem = document.querySelectorAll('.tab-headers .tab-link')
const tabTextsElem = document.querySelectorAll('.tab-texts .text')

tabLinksElem.forEach((tab) => {
	tab.addEventListener('click', ()=>{
		//remove all red UnderLines
		tabLinksElem.forEach((t) => {
			t.classList.remove('activeTab')
		})

		//adds red underLine to the clicked tab
		tab.classList.add('activeTab')


		//getting the tabLink and Text element 
		//for removing and displaying text purposes
		//by using short hand way of decunstructing
		const { tabId } = tab.dataset

		tabTextsElem.forEach((text) => {
			//remove all texts in the screen
			text.classList.remove('activeText')

			//get text id
			const { textId } = text.dataset

			//if the text id that we got from looping all the texts we have 
			//matches the tab id that we got from clicking the tab 
			//then we display the text byt adding the activeText class
			if (textId === tabId) {
				text.classList.add('activeText')
			}
		})

	})
})
