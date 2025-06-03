import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface BookCardProps {
  id: string;
  title: string;
  author: string;
  price: number;
  originalPrice?: number;
  rating: number;
  cover: string;
  genre: string;
  isNew?: boolean;
  isBestseller?: boolean;
}

const BookCard = ({
  title,
  author,
  price,
  originalPrice,
  rating,
  cover,
  genre,
  isNew,
  isBestseller,
}: BookCardProps) => {
  const discount = originalPrice
    ? Math.round((1 - price / originalPrice) * 100)
    : 0;

  return (
    <div className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border hover:border-primary/20">
      {/* Cover Image */}
      <div className="relative overflow-hidden">
        <img
          src={cover}
          alt={title}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {isNew && (
            <Badge className="bg-green-500 hover:bg-green-600">Новинка</Badge>
          )}
          {isBestseller && (
            <Badge className="bg-orange-500 hover:bg-orange-600">
              Бестселлер
            </Badge>
          )}
          {discount > 0 && <Badge variant="destructive">-{discount}%</Badge>}
        </div>

        {/* Quick Actions */}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button
            variant="ghost"
            size="icon"
            className="bg-white/80 hover:bg-white"
          >
            <Icon name="Heart" className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="mb-2">
          <Badge variant="outline" className="text-xs">
            {genre}
          </Badge>
        </div>

        <h3 className="font-semibold text-lg mb-1 line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>

        <p className="text-gray-600 text-sm mb-3">{author}</p>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Icon
              key={i}
              name="Star"
              className={`h-4 w-4 ${
                i < Math.floor(rating)
                  ? "text-yellow-400 fill-current"
                  : "text-gray-300"
              }`}
            />
          ))}
          <span className="text-sm text-gray-600 ml-1">({rating})</span>
        </div>

        {/* Price & Actions */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-primary">{price}₽</span>
            {originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                {originalPrice}₽
              </span>
            )}
          </div>

          <div className="flex gap-2">
            <Button size="sm" variant="outline">
              <Icon name="Eye" className="h-4 w-4" />
            </Button>
            <Button size="sm">
              <Icon name="ShoppingCart" className="h-4 w-4 mr-1" />
              Купить
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
