module Jekyll
  module RandomFilter
    # Use sample to get a random value from an array
    #
    # input - The Array to sample.
    #
    # Examples
    #
    #   random([1, 2, 3, 4, 5])
    #   # => ([2])
    #
    # Returns a randomly-selected item out of an array.
    def randombanner(input)
      input.shuffle.sample(2)
    end
  end
end

Liquid::Template.register_filter(Jekyll::RandomFilter)
