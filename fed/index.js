$(function(){
	// 初始化jstree
	$('.tree_wrap').jstree({
		'core' : {
			'data' : [
				{ "text" : "Root node", "children" : [
						{ "text" : "Child node 1" },
						{ "text" : "Child node 2" }
				]}
			],
			'themes' : {
							'responsive' : false,
							'variant' : 'small',
							'stripes' : true
						}
		}
	}).on('changed.jstree', function (e, data) {
		console.log(123)
		});
	// 加载数据

	var e = document.getElementById('ta1')
    var editor = CodeMirror.fromTextArea(e, {
        mode: 'gfm',
        lineNumbers: true,
        theme: "3024-day",
        extraKeys: {"Enter": "newlineAndIndentContinueMarkdownList"}
    });
    // // console.log(editor)
    // var code_mirror = document.getElementsByClassName('CodeMirror')[0]
    // code_mirror.style.height = window.innerHeight - 106 + "px"
    // window.onresize = function() {
    //     code_mirror.style.height = window.innerHeight - 106 + "px"
    // }
    // var input = document.getElementById("select");
    // function selectTheme() {
    //     var theme = input.options[input.selectedIndex].textContent;
    //     editor.setOption("theme", theme);
    // }
})