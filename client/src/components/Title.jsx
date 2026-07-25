const Title = ({ text1, text2 }) => {
  return (
    <div className="inline-flex gap-3 items-center mb-5 tracking-wider uppercase">
      <p className="text-sm sm:text-base font-semibold text-zinc-500">
        {text1}{' '}
        <span className="ml-1 px-2 py-0.5 bg-amber-500/10 text-amber-500 border border-amber-500/30 rounded font-bold text-xs sm:text-sm tracking-widest">
          {text2}
        </span>
      </p>
      <div className="w-10 sm:w-16 h-[2px] bg-zinc-800" />
    </div>
  )
}

export default Title