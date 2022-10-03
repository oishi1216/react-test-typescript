export const Practice1 = () => {
    const onClickPractice = () => alert("テスト")
    return(
        <div>
            <p>練習問題:引数の型指定</p>
            <button onClick={onClickPractice}>練習問題1を実行</button>
        </div>
    )
}