class SortableTableElement extends HTMLElement {
	connectedCallback() {
		this._body = this.querySelector("tbody");
		this._rows = Array.from(this._body.querySelectorAll("tr"));
		
		this.querySelectorAll("thead th").forEach(header =>
			header.addEventListener("click", event => this._sortTable(event.target))
		);
	}
	
	_sortTable(header) {
		let column = Array.from(header.parentElement.children).indexOf(header);
		
		this._rows.sort((row1, row2) =>
			this._getCell(row1, column).localeCompare(this._getCell(row2, column))
		);
		this._rows.forEach(row => this._body.removeChild(row));
		this._rows.forEach(row => this._body.appendChild(row));
	}
	
	_getCell(row, column) {
		return row.querySelectorAll("td")[column].textContent;
	}
}

customElements.define("sortable-table", SortableTableElement);
