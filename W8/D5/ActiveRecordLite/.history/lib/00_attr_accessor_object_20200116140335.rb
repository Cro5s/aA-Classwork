class AttrAccessorObject
  def self.my_attr_accessor(*names)
    # names = [:bee]
    names.each { |name| 

      define_method(name.to_sym) {
        instance_variable_get("@" + name.to_s) # == @name
      }
    }
  end
end
