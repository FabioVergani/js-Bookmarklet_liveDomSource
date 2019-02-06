(w=>{
	const o={
		'&':'&amp;',
		'<':'&lt;',
		'>':'&gt;',
		'"':'&quot;',
		'\'':'&#39;',
		'/':'&#x2F;'
	},
	e=w.open().document.body;
	e.style.whiteSpace='pre';
	e.innerHTML=new w.XMLSerializer().serializeToString(w.document).replace(/[&<>"'\/]/g,p=>o[p]);
})(window)
