source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

ruby '2.3.1'

gem 'rails', '~> 5.0.3'
gem 'pg','~> 0.21.0'
gem 'puma', '~> 3.0'
gem 'sass-rails', '~> 5.0'
gem 'uglifier', '>= 1.3.0'
gem 'coffee-rails', '~> 4.2'
gem 'jquery-rails'
gem 'jbuilder', '~> 2.5'

group :development, :test do
  gem 'byebug', platform: :mri
  gem 'pry-rails'
end

group :development do
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '~> 3.0.5'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
  gem 'rubocop', '~> 0.46.0', require: false
  gem 'erb2haml'
  gem 'annotate', require: false
end

group :production do
  gem 'rails_12factor'
end

gem 'haml'
# gem 'rest-client'
# gem 'figaro'
# gem 'devise'
# gem 'adminlte2-rails'
# gem 'font-awesome-rails'
# gem 'json'

gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
