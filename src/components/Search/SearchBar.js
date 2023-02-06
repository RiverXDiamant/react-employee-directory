export default function SearchBar() {
  return (
    <>
      <div className="searchBar">
        <form>
          <input type="text" name="search-employee" placeholder="John Smith" />
          <input type="submit" value="search" />
        </form>
      </div>
    </>
  );
}
