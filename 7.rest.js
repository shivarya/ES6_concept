function submitHandler(title, content, ...otherData) {
    console.log(title,content,otherData);
}

submitHandler(
    'data1',
    'data2',
    'data3',
    'data4',
    'data4'
);