//#dom2console.js
(w=>{
	const c=w.console,g='DOM';
	c.group(g);
	for(
		let n,e=w.document.documentElement,f=(i,e)=>{c.log('%s%O','\t'.repeat(i),e)},v=true,i=0;
		-1!==i;
		e=n
	){
		if(
			v && (
				f(i,e),
				null!==(n=e.firstChild)
			)
		){
			++i
		}else{
			(v=(null!==(n=e.nextSibling)))||(--i,n=e.parentNode)
		}
	};
	c.groupEnd(g)
})(window);
/*
//javascript:
(w=>{const c=w.console,g='DOM';c.group(g);for(let n,e=w.document.documentElement,f=(i,e)=>{c.log('%s%O','\t'.repeat(i),e)},v=true,i=0;-1!==i;e=n){if(v&&(f(i,e),null!==(n=e.firstChild))){++i}else{(v=(null!==(n=e.nextSibling)))||(--i,n=e.parentNode)}};c.groupEnd(g)})(window)
*/