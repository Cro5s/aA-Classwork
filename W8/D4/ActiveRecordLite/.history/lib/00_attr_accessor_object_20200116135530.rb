class AttrAccessorObject
  def self.my_attr_accessor(*names)
    names.each { |name| 
      define_method(name.to_sym) {
        # name = "bee"
        # we want an instance variable, which is called @bee
        @name
      }
    }
  end
end
