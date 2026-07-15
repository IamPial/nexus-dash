// components/ItemsTable.tsx
"use client";

import { Table, Button } from "@heroui/react";
import { FiEye } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import type { ExploreItem } from "@/lib/api/explore";
import { DeleteModal } from "./DeleteModal";


const ItemsTable = ({ items }: { items: ExploreItem[] }) => {
  return (
    <div className="hidden md:block">
      <Table>
        <Table.ScrollContainer>
          <Table.Content aria-label="Items Management Table" className="min-w-full">
            <Table.Header>
              <Table.Column isRowHeader className="text-slate-500 font-bold uppercase tracking-wider text-xs py-4 pl-6">
                Item Info
              </Table.Column>
              <Table.Column className="text-slate-500 font-bold uppercase tracking-wider text-xs py-4">
                Price
              </Table.Column>
              <Table.Column className="text-slate-500 font-bold uppercase tracking-wider text-xs py-4">
                Duration
              </Table.Column>
              <Table.Column className="text-slate-500 font-bold uppercase tracking-wider text-xs py-4 pr-6 text-right">
                Actions
              </Table.Column>
            </Table.Header>
            <Table.Body items={items}>
              {(item) => (
                <Table.Row
                  key={item._id}
                  className="border-b border-slate-100 last:border-0 hover:bg-slate-50/50 transition-colors"
                >
                  <Table.Cell className="py-4 pl-6">
                    <div className="flex items-center gap-3">
                      {item.image ? (
                        <div className="relative w-12 h-12 overflow-hidden rounded-xl border border-slate-200">
                          <Image src={item.image} alt={item.title} fill className="object-cover" />
                        </div>
                      ) : (
                        <div className="w-12 h-12 bg-slate-100 rounded-xl border border-slate-200 flex items-center justify-center text-slate-400 font-bold text-xs">
                          No Img
                        </div>
                      )}
                      <div>
                        <h4 className="font-bold text-slate-900 text-sm max-w-[280px] truncate">{item.title}</h4>
                        <p className="text-xs text-slate-400 max-w-70 truncate">{item.description}</p>
                      </div>
                    </div>
                  </Table.Cell>

                  <Table.Cell className="font-semibold text-slate-800 text-sm">
                    ${item.price}
                  </Table.Cell>

                  <Table.Cell className="text-sm text-slate-500">{item.duration}</Table.Cell>

                  <Table.Cell className="py-4 pr-6 text-right">
                    <div className="flex justify-end gap-2">
                      <Link href={`/explore/${item._id}`}>
                        <Button size="sm" className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-lg p-2 min-w-0 transition-colors cursor-pointer">
                          <FiEye size={16} />
                        </Button>
                      </Link>
                      <DeleteModal destinations={item}/>
                    </div>
                  </Table.Cell>
                </Table.Row>
              )}
            </Table.Body>
          </Table.Content>
        </Table.ScrollContainer>
      </Table>
    </div>
  );
};

export default ItemsTable;