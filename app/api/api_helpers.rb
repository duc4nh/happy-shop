module ApiHelpers
  def create_pagination_params(page, per_page, total_pages, count)
    {
        page: page,
        per_page: per_page,
        total_pages: total_pages,
        count: count
    }
  end
end
