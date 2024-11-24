const Loading = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-slate-900">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-sky-500 rounded-full animate-bounce"></div>
          <div className="w-4 h-4 bg-sky-500 rounded-full animate-bounce delay-150"></div>
          <div className="w-4 h-4 bg-sky-500 rounded-full animate-bounce delay-300"></div>
        </div>
      </div>
    )
}
export default Loading