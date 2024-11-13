
function Pagination({currentPage, total, limit, onPageChange}) {
    const pageCount = Math.ceil(total / limit);
    
  return (
    <div>Pagination</div>
  )
}

export default Pagination